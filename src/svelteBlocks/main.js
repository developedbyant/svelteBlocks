#! /usr/bin/env node
// @ts-check
import inquirer from 'inquirer';
import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname } from "path"

const PROJECT_DIR = process.cwd()
const PACKAGE_DIR = dirname(fileURLToPath(import.meta.url))
let componentsDir = ""
/** Indicate if user already ran app once */
let running = false
/** Indicate if we are in dev mode */
const dev = true
/** List of components, from components.json file @type {import('./types').CompnentData[]} */
let componentsJson = JSON.parse(fs.readFileSync(`${PACKAGE_DIR}/components.json`).toString())

/** Console log msg with colors */
export const log = new class {
    error(string=''){ console.log(`\x1b[31m${string}\x1b[0m`) }
    successful(string=''){ console.log(`\x1b[32m${string}\x1b[0m`) }
}  

/** Capitalize string @param {string} data */
const capitalize = (data)=> data.charAt(0).toUpperCase()+data.slice(1)
// Run when dev
if(dev){
    const components = fs.readdirSync("src/lib")
    /** @type {import('./types').CompnentData[]} */
    const newComponentsJson = []
    // Copy components
    fs.copySync("src/lib/","package/components/") 
    // Loop all components locally
    for(const component of components){
        const isValideFile = !component.endsWith(".ts") && !component.endsWith(".js") && !component.endsWith(".json")     
        // If is not a valide file, skip it   
        if(!isValideFile) continue
        // Else run code
        const isFile = component.includes(".")
        const componentName = isFile ? capitalize(component.split(".")[0]) : capitalize(component)
        const componentPath = `components/${isFile ? component : component+"/"+componentName+".svelte"}`
        const componentExists = newComponentsJson.includes({ name:componentName,isFile,path:componentPath})
        // Add component if it does not exists
        if(!componentExists) newComponentsJson.push({ name:componentName,path:componentPath,isFile})
    }
    // Update components track file/json
    fs.writeFileSync("package/components.json",JSON.stringify(newComponentsJson,null,4))
    componentsJson = newComponentsJson
}


// Main code
async function main() {
    // Only run when app run for the first time
    if(!running){
        const compDir = await inquirer.prompt({
            type:"input",name:"data",default:"src/components/",
            message:"Where whould you like to save components to ?"
        })
        // If check if dir exists
        if(!fs.existsSync(compDir.data)){
            log.error(`Directory ${compDir.data} does not exists`)
            process.exit(1)
        }
        componentsDir = compDir.data
        // Set script to running
        running = true
    }
    /** Ask user to select components @type {string[]} */
    const components = componentsJson.map(data=>data.name)
    const selectedComp = await inquirer.prompt({
        type:"list",
        choices:components,
        name:"data",
        message:`Select component to add to ${componentsDir}`
    })
    /** Find component using name @type {import('./types').CompnentData | undefined } */
    const selectedComponent = componentsJson.find(data=>data.name===selectedComp.data)
    // Copy component
    if(selectedComponent){
        const compFullPathName = selectedComponent.path.split("components/")[1]
        const compSrc = `${PACKAGE_DIR}/${selectedComponent.path}`
        const compDest = `${PROJECT_DIR}/${componentsDir+compFullPathName}`
        fs.copySync(compSrc,compDest)    
        log.successful(`${selectedComponent.name} was added to ${componentsDir+compFullPathName}`)
        // Ask to keep script running
        const keepRunning = await inquirer.prompt({ type:"list",choices:["yes","no"],default:"yes",name:"data",message:"Keep script running ?"})
        if(keepRunning.data==="no") process.exit(1)
    }
    // Show somthing went wrong msg
    else{
        log.error("Something went wrong")
        process.exit(1)
    }
}

while(true){
    await main()
}

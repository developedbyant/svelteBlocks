<div class="title">
    <h2>
        <slot />
    </h2>
</div>

<style>
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title h2{
        font-size: 25px;
        font-weight: 600;
        color: var(--sb-header-color);
    }
</style>
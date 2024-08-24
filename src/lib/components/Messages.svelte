<script>
    import Icon from '@iconify/svelte';
    import peopleData from "$lib/utils/data.json"
   
</script>


<div class="pt-8 px-4">
    <div class="flex items-center justify-between">
        <h1 class="text-xl text-text-primary">MESSAGES</h1>
        
        <div class="flex items-center gap-4">
            <a href="/newchat" class="cursor-pointer"><Icon icon="system-uicons:write" class="text-text-primary text-xl font-bold opacity-80" /></a>
            <!-- <Icon icon="ph:pencil-line" class="text-text-primary text-xl opacity-60" /> -->
            <Icon icon="ic:outline-search" class="text-text-primary text-xl opacity-60" />
        </div>
    </div>

    <div class="pt-4 flex flex-col gap-4 h-[280px] overflow-y-auto">
        {#each peopleData as people}
            {#if people.isonline === false}
            <a href={"/openchat/" + people.name}>  <div class="flex items-center gap-3">
                <img src={people.image} alt="" class="rounded-full w-14 h-14 " />
                <div class="flex flex-col">
                    <h1 class="text-text-primary text-lg font-semibold">{people.name}</h1>
                    <h1 class="text-text-primary">some text</h1>
                </div>
            </div>
        </a> 
            {/if}
        {/each}
    </div>
</div>
<script>
    import Icon from '@iconify/svelte';
    import peopleData from "$lib/utils/data.json"
    import { onMount } from 'svelte';

  
  onMount(() => {
      console.log(peopleData)
    })

    // const callApi = async () =>  {
    //     const result = await fetch("https://randomuser.me/api/?results=10")
    //     const res = result.json()
      
    //     console.log(res)
    // }
</script>

<div class="px-4 pt-12">
    <div class="flex items-center justify-between">
        <h1 class="text-xl text-text-primary">ONLINE CHAT</h1>
        <Icon icon="ic:outline-search" class="text-text-primary text-xl opacity-60" />
    </div>
    <p class="pt-4 text-text-primary  text-sm">Chats are end-to-end encrypted, not saved by MindPlex.</p>

    <div class="pt-4 flex flex-col gap-4 h-[280px] overflow-y-auto">
        {#each peopleData as people}
            {#if people.isonline}
            <a href={"/openchat/" + people.name}><div class="flex items-center gap-3">
                <div class="relative">
                    <img src={people.image} alt="" class="rounded-full w-14 h-14 " />
                    <!-- <div class="p-[4px] bg-gray-500 rounded-full absolute bottom-0 right-0"> -->
                        <div class="p-[8px] bg-[#31A24C] rounded-full border-4 border-[#4F4F4F] absolute -bottom-2 right-0"></div>
                    <!-- </div> -->
                </div>
                <h1 class="text-text-primary text-lg font-semibold">{people.name}</h1>
            </div>
        </a>
            {/if}
        {/each}
    </div>
</div>
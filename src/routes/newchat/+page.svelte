<script>
    import Icon from '@iconify/svelte';
    import peopleData from "$lib/utils/data.json"
   import { onMount } from 'svelte';
   export let data;

    let searchTo = ""
    let peopleFound = []

    const searchPeople = () => {
        peopleFound = [...peopleData.filter((people) => searchTo === "" ? null : people.name.toLowerCase().includes(searchTo.toLowerCase()) )]
        // console.log(peopleData.filter((people) => searchTo === "" ? people : people.name.toLowerCase().includes(searchTo.toLowerCase()) ))
    }


</script>


<div class="h-[400px]">
    <div class="flex items-center justify-between p-3">
        <h1 class="text-text-primary text-xl">NEW ONLINE CHAT</h1>
        <Icon icon="ic:baseline-close" class="text-text-primary text-xl"  />
    </div>
    <div class=" flex items-center gap-2 w-full p-3">
        <p class="text-text-primary text-lg font-semibold">To:</p>
        <input type="text" bind:value={searchTo} class="w-full p-2 outline-none bg-transparent text-text-primary" on:input={searchPeople} />
    </div>
    <div class="p-[1px] w-full bg-white opacity-60"></div>

    <div class="p-3 flex flex-col gap-3 h-[270px] overflow-auto">
        {#each peopleFound as people}         
        <a  href={"/openchat/" + people.name}> <div class="flex items-center gap-3">
                <div class="relative">
                    <img src={people.image} alt="" class="rounded-full w-14 h-14 " />
                    <!-- <div class="p-[4px] bg-gray-500 rounded-full absolute bottom-0 right-0"> -->
                        <div class="p-[8px] bg-[#31A24C] rounded-full border-4 border-[#4F4F4F] absolute -bottom-2 right-0"></div>
                    <!-- </div> -->
                </div>
                <div class="flex flex-col">
                    <h1 class="text-text-primary text-lg font-semibold">{people.name}</h1>
                </div>
            </div></a>
        {/each}
    </div>
</div>
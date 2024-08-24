<script>
    export let data
</script>

<div class="flex flex-col item-center h-full w-full pt-8 flex-[4]">
    <div class="flex flex-col items-center gap-3">
        <div class="relative">
            <img src={data.people.image} alt="" class="rounded-full w-12 h-12 " />
            <!-- <div class="p-[4px] bg-gray-500 rounded-full absolute bottom-0 right-0"> -->
                <div class="p-[6px] bg-[#31A24C] rounded-full border-4 border-[#F0F2F5] absolute -bottom-2 right-0"></div>
            <!-- </div> -->
        </div>
        <h1 class="text-text-primary text-lg font-semibold">{data.people.name}</h1>
    </div>
    <div class="flex flex-col justify-center items-center gap-1  text-center">
        <p class="text-text-primary">Mindplex</p>
        <p class="text-text-primary ">You are friends on mindplex</p>
        <p class="text-text-primary w-[80%]">Chats are end-to-end encrypted, not saved by MindPlex.</p>
    </div>
</div>
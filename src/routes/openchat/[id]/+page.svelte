<script>
	import Attachment from './../../../lib/components/extend/Attachment.svelte';
	import Message from './../../../lib/components/properties/Message.svelte';
	import Emptymessages from '$lib/components/properties/Emptymessages.svelte';
	import  Icon  from '@iconify/svelte';
export let data

let attachItem = false;
const attachClicked = () => {
    attachItem = !attachItem;
    console.log(attachItem)
}
 console.log(attachItem)
</script>

<div class="h-[600px] flex flex-col justify-between">
    <div class="flex items-center justify-between p-3">
        <div class="flex items-center gap-3">
                    <div class="relative">
                        <img src={data.people.image} alt="" class="rounded-full w-12 h-12 " />
                        <!-- <div class="p-[4px] bg-gray-500 rounded-full absolute bottom-0 right-0"> -->
                            <div class="p-[6px] bg-[#31A24C] rounded-full border-4 border-[#F0F2F5] absolute -bottom-2 right-0"></div>
                        <!-- </div> -->
                    </div>
                    <h1 class="text-text-primary text-lg font-semibold">{data.people.name}</h1>
                </div>
                <Icon icon="ic:baseline-close" class="text-text-primary text-2xl"  />
    </div>
    <div class="p-[1px] w-full bg-white opacity-60"></div>

   {#if data.people.messagesexist}
    <Emptymessages data={data} />
    {:else}
   <Message />
   {/if}
 <div class="p-3">
    <div class="flex items-center gap-3 justify-between">
        {#if attachItem}
            <Attachment />
        {/if}
        <button on:click={attachClicked}><Icon icon="ic:outline-add-circle" class="text-text-primary text-4xl" /></button>
        <input type="text" class="flex-4 bg-[#4F4F4F] h-[40px] border-[1px] rounded-[10px] border-[#878686] w-full px-3 py-2 outline-none text-text-primary" placeholder="Type here..."  />
        <Icon icon="ic:baseline-send" class="text-text-primary text-5xl "/>
    </div>
   </div>
</div>


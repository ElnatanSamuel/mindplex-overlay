<script>
import Icon from '@iconify/svelte';
  import OnlineChats from '$lib/components/OnlineChats.svelte';
  import Messages from '$lib/components/Messages.svelte';
</script>

<div> 
        <div class="w-10 h-10 flex justify-center items-center bg-primary shadow-2px rounded-full absolute -top-4 left-[50%] -ml-5 cursor-pointer">
            <Icon icon="ic:baseline-close" class="text-white text-2xl" />
        </div>

        <div>
            <OnlineChats />
            <Messages />
        </div>
  
</div>

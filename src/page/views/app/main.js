import {  ref,reactive, computed } from "vue";
import { useStore } from "vuex";

let brain = { 
    setup() {
      const store = useStore(); 
        const data = computed(() => {return store.state.user.user})
       
        
        return { data };
      },
      
      
};


export default brain
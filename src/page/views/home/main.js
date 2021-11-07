import { ref,computed  } from "vue";
import { useStore } from "vuex";
import usecase from '@/domain/usecase/index.js'
import HelloWorld from '../../components/helloWorld/index.vue'
let brain = { 
    setup() {
        const name = ref("hi this is saeed");
        const store = useStore(); 
        const data = computed(() => {return store.state.user.user})
        const getData=()=>{  usecase.user.updateUser(Math.floor(Math.random() * 101))}
        
        return { name,data ,getData};
      },
      
      components: { HelloWorld},
};


export default brain
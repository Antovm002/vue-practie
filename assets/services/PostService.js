import { ref } from 'vue'
//service
class PostService {
    //constructor genera posts vacios por defecto
    constructor() {
        this.posts = ref([])
    }
    
    //solicita los posts
    getPosts () {
        return this.posts.value
    }
    
    getPostById (id) {
        const { cars } = this.getPosts();

        return cars.find(car => car.id == id);
    }
    
    //trae info de posts de la API
    async fetchAll (){
        try{
            const url = 'https://myfakeapi.com/api/cars/'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch(error){
            console.log(error)
        }
    }
}
export default PostService
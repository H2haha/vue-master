<template>
   
    <div>


    abc page
    <ul>
    	<li v-for="user in users">{{user.username}}</li>
    </ul>

    </div>

</template>

<script>
	import {getdetail} from '../api/shop.js';
    export default {
    	data () {
    		return {
    			users: []
    		}
    	},
    	created () {
    		this.getShopDetail();
    	},
         methods: {
         	getShopDetail () {
         		getdetail().then(response => {
         			this.users = response.data.data.users;
         			console.log(this.users);
         		});  // Promiose
         	}
         }
    };
</script>

 // var message = this.message;
    // if (message) {
    //     let arr = this.data1.filter(item => {
    //         return item.CID === message;
    //         console.log(message);
    //     });
    //     this.data1 = arr;
    //     console.log(arr);
    // }
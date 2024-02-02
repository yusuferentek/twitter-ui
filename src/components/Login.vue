<template>
    <div class="flex items-center justify-center h-screen bg-blue-500">
        <div class="bg-white w-[60rem] h-[65rem] p-8 rounded-[3rem] shadow-md pt-[18rem]">
            <h2 class="text-3xl font-bold mb-8 text-center text-blue-500">Log in to Twitter</h2>
            <form @submit.prevent="login(username, password)">
                <div class="mb-4">
                    <label for="username" class="block text-md font-medium text-gray-600">Username</label>
                    <input v-model="username" type="text" id="username" name="username"
                        class="mt-1 p-3 w-full border rounded-[3rem]  h-[5rem] text-[1.6rem]" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-md font-medium text-gray-600">Password</label>
                    <input v-model="password" type="password" id="password" name="password"
                        class="mt-1 p-3 w-full border rounded-[3rem] h-[5rem] text-[1.6rem]" required />
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white p-3 rounded-[3rem] h-[5rem] text-[1.6rem] hover:bg-neutral-300">Log
                    in</button>
                <div v-if="message" class="mt-4 text-red-500 text-[1.6rem]">
                    {{ message }}
                </div>
                <div class="flex flex-row w-full mt-[1rem]">
                    <div class="w-full"></div>
                    <router-link to="/signup"><button class="w-[16rem] h-[4rem] rounded-[3rem] bg-neutral-300 text-white hover:bg-blue-500">Üye Ol</button></router-link>
                </div>
                
            </form>

        </div>
    </div>
</template>

<script>
import { userApi } from '@/services/apiService';
export default {
    name: 'LogiN',
    data() {
        return {
            username: "",
            password: "",
            message: "",
        };
    },
    methods: {
        async login(username, password) {
            try {
                // Gönderilecek veri
                const postData = {
                    username: username,
                    password: password,
                };

                // API endpoint
                const apiUrl = "/login"; // baseURL'e ek olarak endpoint belirtiyoruz

                // POST isteği
                const response = await userApi.post(apiUrl, postData);

                // API yanıtını işleme
                console.log("Başarılı:", response.data);

                if (response.data.resultType == 2) {
                    this.message = "Hatalı kullanıcı adı veya şifre."
                } else {
                    console.log(response.data.obj.token)
                    this.$store.state.user = response.data.obj;
                    this.$store.dispatch('openSession', { token: response.data.obj.token , user: this.$store.getters.getUser})
                    this.$router.push('/home');
                }
            } catch (error) {
                // Hata durumunda işleme
                console.error("Hata:", error.message);

            }
        },
    }
}

</script>

<style></style>
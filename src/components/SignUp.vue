<template>
    <div class="flex items-center justify-center h-screen bg-blue-500">
        <transition name="fade" mode="out-in">
            <div v-if="step === 1" key="step1"
                class="transition-opacity bg-white w-[60rem] h-[55rem] p-8 rounded-[3rem] shadow-md pt-[10rem]">
                <h2 class="text-3xl font-bold mb-8 text-center text-blue-500">Twitter'a Üye Ol</h2>
                <form @submit.prevent="nextStep">
                    <div class="mb-4">
                        <label for="fullName" class="block text-md font-medium text-gray-600">Adınız Soyadınız</label>
                        <input v-model="fullName" type="text" id="fullName" name="fullName"
                            class="mt-1 p-3 w-full border rounded-[3rem] h-[5rem] text-[1.6rem]" required />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-md font-medium text-gray-600">Email</label>
                        <input v-model="email" type="email" id="email" name="email"
                            class="mt-1 p-3 w-full border rounded-[3rem] h-[5rem] text-[1.6rem]" required />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-md font-medium text-gray-600">Şifre</label>
                        <input v-model="password" type="password" id="password" name="password"
                            class="mt-1 p-3 w-full border rounded-[3rem] h-[5rem] text-[1.6rem]" required />
                    </div>
                    <button type="submit"
                        class="transition-all w-full bg-blue-500 text-white p-3 rounded-[3rem] h-[5rem] text-[1.6rem] hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">İleri</button>
                    <div v-if="message" class="mt-4 text-red-500 text-[1.6rem]">
                        {{ message }}
                    </div>
                </form>
            </div>
            <div v-if="step === 2" key="step2"
                class="transition-opacity bg-white w-[60rem] h-[65rem] p-8 rounded-[3rem] shadow-md pt-[10rem]">
                <h2 class="text-3xl font-bold mb-8 text-center text-blue-500">Diğer Bilgilerinizi Girin</h2>
                <form @submit.prevent="completeSignup">
                    <div class="mb-4 flex justify-center">
                        <label for="profileImage" class="block text-md font-medium text-gray-600 cursor-pointer">
                            Profil Fotoğrafı
                            <input type="file" id="profileImage" name="profileImage" accept="image/*"
                                @change="handleImageUpload" class="hidden" />
                        </label>
                    </div>
                    <div class="mb-4 flex justify-center">
                        <label for="profileImagePreview" class="cursor-pointer">
                            <img v-if="profileImage" :src="profileImagePreview" alt="Profile Preview"
                                class="rounded-full h-[10rem] w-[10rem] object-cover mb-4 cursor-pointer"
                                @click="openFileInput" />
                            <img v-else
                                src="https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1"
                                alt="Default Avatar" class="rounded-full h-24 w-24 object-cover mb-4 cursor-pointer"
                                @click="openFileInput" />
                        </label>
                    </div>
                    <div class="mb-4">
                        <label for="username" class="block text-md font-medium text-gray-600">Kullanıcı Adı</label>
                        <input v-model="username" type="text" id="username" name="username"
                            class="mt-1 p-3 w-full border rounded-[3rem] h-[5rem] text-[1.6rem]" required />
                    </div>
                    <div class="mb-4">
                        <label for="phoneNumber" class="block text-md font-medium text-gray-600">Telefon Numarası</label>
                        <input v-model="phoneNumber" type="tel" id="phoneNumber" name="phoneNumber"
                            class="mt-1 p-3 w-full border rounded-[3rem] h-[5rem] text-[1.6rem]" required />
                    </div>
                    <!-- Profil fotoğrafı yükleme seçeneği buraya eklenebilir -->
                    <button type="submit"
                        class="transition-all w-full bg-blue-500 text-white p-3 rounded-[3rem] h-[5rem] text-[1.6rem] hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Üyeliği
                        Tamamla</button>
                    <div v-if="message" class="mt-4 text-red-500 text-[1.6rem]">
                        {{ message }}
                    </div>
                    <div class="flex flex-row w-full mt-[1rem]">
                        <button @click="prevStep"
                            class="transition-all w-[16rem] h-[4rem] rounded-[3rem] bg-neutral-300 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300">Geri</button>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import { userApi } from '@/services/apiService';
export default {
    name: 'SignUp',
    data() {
        return {
            step: 1,
            fullName: "",
            email: "",
            password: "",
            username: "",
            phoneNumber: "",
            message: "",
            profileImage: null
        };
    },
    computed: {
        profileImagePreview() {
            // Yuvarlak önizleme eklemek için özel bir sınıf ve stil ekleyin
            return this.profileImage ? URL.createObjectURL(new Blob([this.profileImage], { type: 'image/*' })) : null;
        },
    },
    methods: {

        async completeSignup() {
            //const formData = new FormData();
            const arrayBuffer = await new Response(this.profileImage).arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);
            /* formData.append('ProfilePic', uint8Array);
            formData.append('Username', this.username)
            formData.append('Password', this.password);
            formData.append('Email', this.email)
            formData.append('Phone', this.phoneNumber);
            formData.append('Fullname', this.fullName); */
            const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
            console.log(uint8Array)
            const data = {
                ProfilePic: base64String,
                Username: this.username,
                Password: this.password,
                Email: this.email,
                Phone: this.phoneNumber,
                Fullname: this.fullName
            } 


             console.log(data) 

            try {
                const apiUrl = "/NewUser";
                const response = await userApi.post(apiUrl, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.status === 200) {
                    console.log('Üyelik Başarılı');
                } else {
                    console.error('Üyelik Başarısız:', response.statusText);
                }
            } catch (err) {
                console.error('Hata:', err.message);
            }
        },

        nextStep() {
            // Add validation logic if needed
            this.step = 2;
        },
        prevStep() {
            this.step = 1;
        },

        handleImageUpload(event) {
            this.profileImage = event.target.files[0];
        },
        openFileInput() {
            document.getElementById('profileImage').click();
        },
    },
}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

button {
    cursor: pointer;
}

/* İleri ve Geri Butonları */
button:hover {
    filter: brightness(1.1);
}

button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
}
</style>
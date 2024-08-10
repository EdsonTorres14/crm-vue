<script setup>
import { FormKit } from '@formkit/vue';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue';

defineProps({
    titulo: {
        type: String
    }
})

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form">
                    <FormKit type="text" label="Nombre" placeholder="Nombre del cliente" validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />

                    <FormKit type="text" label="Apellido" placeholder="Apellido del cliente" validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }" />

                    <FormKit type="email" label="Email" placeholder="Email del cliente" validation="required|email"
                        :validation-messages="{ required: 'El email del cliente es obligatorio' }" />

                    <FormKit type="text" label="Teléfono" placeholder="Teléfono del cliente" validation="required|email"
                        :validation-messages="{ required: 'El teléfono del cliente es obligatorio' }" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
    max-width: 100%;
}
</style>
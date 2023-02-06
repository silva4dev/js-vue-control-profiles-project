<template>
    <v-container fluid>
        <v-tabs color="grey lighten-3"
            slider-color="blue">
            <v-tab ripple>
                List
            </v-tab>

            <v-tab ripple>
                Query
            </v-tab>

            <v-tab ripple>
                New
            </v-tab>

            <v-tab ripple>
                Update
            </v-tab>
            
            <v-tab ripple>
                Delete
            </v-tab>

            <v-tab-item>
                <Lista />
            </v-tab-item>

            <v-tab-item>
                <Consulta />
            </v-tab-item>

            <v-tab-item>
                <Novo />
            </v-tab-item>
            
            <v-tab-item>
                <Alterar />
            </v-tab-item>
            
            <v-tab-item>
                <Excluir />
            </v-tab-item>
        </v-tabs>
    </v-container>
</template>

<script>
import Lista from './Lista'
import Consulta from './Consulta'
import Novo from './Novo'
import Alterar from './Alterar'
import Excluir from './Excluir'

export default {
    components: { Lista, Consulta, Novo, Alterar, Excluir }
}
</script>

<style>

</style>

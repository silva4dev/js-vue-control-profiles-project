<template>
    <v-container fluid>
        <v-layout>
            <v-flex>
                <v-layout column class="ma-3">
                    <h1 class="headline">New profile</h1>
                    <v-divider class="mb-3" />
                        <div v-if="erros">
                            <Erros :erros="erros" />
                        </div>
                        <v-text-field label="Name"
                            v-model="perfil.nome" />
                        <v-text-field label="Label"
                            v-model="perfil.rotulo" />
                        <v-btn color="primary" class="ml-0 mt-3"
                            @click="novoPerfil">
                            New Profile
                        </v-btn>
                </v-layout>
            </v-flex>
            <v-flex>
                <v-layout column class="ma-3">
                    <h1 class="headline">Result</h1>
                    <v-divider />
                    <template v-if="dados">
                        <v-text-field label="ID" readonly
                            v-model="dados.id" />
                        <v-text-field label="Name" readonly
                            v-model="dados.nome" />
                        <v-text-field label="Label" readonly
                            v-model="dados.rotulo" />
                    </template>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Erros from '../comum/Erros'
import gql from 'graphql-tag'

export default {
    components: { Erros },
    data() {
        return {
            perfil: {},
            dados: null,
            erros: null
        }
    },
    methods: {
        novoPerfil() {
            this.$api.mutate({
                mutation: gql`
                    mutation (
                        $nome: String!
                        $rotulo: String!
                    ) {
                        novoPerfil (
                            dados: {
                                nome: $nome
                                rotulo: $rotulo
                            }
                        ) {
                            id nome rotulo
                        }
                    }
                `,
                variables: {
                    nome: this.perfil.nome,
                    rotulo: this.perfil.rotulo,
                }
            }).then(resultado => {
                this.dados = resultado.data.novoPerfil
                this.perfil = {}
                this.erros = null
            }).catch(e => {
                this.erros = e
            })
        }
    }
}
</script>

<style>

</style>

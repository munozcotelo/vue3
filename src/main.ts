import * as vue from "vue";

// import * as RootComponent from "./logic/components/vue/RootComponent.vue";

interface IBook {
    name   : string;
    author : string;
}

const RootComponent = vue.defineComponent( {

    data() {
        return {
            manolo : 50 as number,
            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,
        }
    },

    beforeCreate () {
        console.info( `En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
    },

    created () {
        console.info( `En el hook de created. Ya tengo this.book ${this.book}` );
    },

    mounted () {
        console.info( "En el hook de mounted" );
        console.info( this.book.name );
    },

    beforeMount () {
        console.info( "En el hook de beforeMount" );
    },

    template: '<div>hola y adios</div>',

} );

const vm : vue.ComponentPublicInstance = vue.createApp( RootComponent ).mount( "#bootstrap" );

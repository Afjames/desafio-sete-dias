const listaDeCompras = {
    
    categorias: {},

    adicionarAlimento: function(categoria, alimento){
        if(!(categoria in this.categorias)){
            this.categorias[categoria] = []
        }
        this.categorias[categoria].push(alimento)
    },

    removerAlimento: function(categoria, alimento){
        if (categoria in this.categorias){
            const index = this.categorias[categoria].indexOf(alimento)
        }
        if (index !== -1) {
            this.categorias[categoria].splice(index, 1)
        } else {
            console.log(`Alimento ${alimento} não encontrado`)
        }
    }
}
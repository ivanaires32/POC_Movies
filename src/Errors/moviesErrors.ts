export function confiltName() {
    return {
        type: "Conflit",
        message: "Filme já cadastrado"
    }
}

export function notFound() {
    return {
        type: "notFound",
        message: "Este filme ainda não foi adicionado"
    }
}
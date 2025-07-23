export const getInitials = (name = "") => {
    if(!name) return

    const words = name.split('')
    const firstInitial = words[0] ? words[0][0] : ''
    const lastInitial = words.length > 1 ? words[words.length - 1][0] : ''

    return (firstInitial + lastInitial).toUpperCase()
}
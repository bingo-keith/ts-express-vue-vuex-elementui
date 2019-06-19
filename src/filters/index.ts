export const capitalize = (value: string) => {
    if (!value) {
        return false
    }
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
} 

export const getGender = (value: number) => {
    const genders = ['男', '女']
    return genders[value] || '不知道啥性别'
}

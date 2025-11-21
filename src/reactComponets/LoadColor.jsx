
export const Color=()=>{
    const Load= localStorage.getItem('color')
    const item= Load ? JSON.parse(Load) : '#b8abab'
    document.documentElement.style.setProperty('--body_bg',item)
    return item}

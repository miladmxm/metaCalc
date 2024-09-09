const t = async (str, lang) => {
    const { default: langFile } = await import(`../locales/${lang}/translation.json`, { with: { type: "json" } })

    console.log(langFile[str] || str)
}
export default t


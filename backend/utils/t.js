const t = async (str="", lang="en") => {
    const { default: langFile } = await import(`../locales/${lang}/translation.json`, { with: { type: "json" } })
    return langFile[str] || str
}
export default t


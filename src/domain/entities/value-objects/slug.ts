const NORMALIZE_FORMAT = "NFKD";
const REMOVE_SPACE_GLOBAL = /\s+/g
const REMOVE_WHAT_IS_NOT_WORD = /[^\w-]+/g
const REMOVE_UNDERSCORE = /_/g
const REMOVE_DOUBLE_HYPHEN = /--+/g
const REMOVE_HYPHEN_AT_END = /-$/g

export class Slug {
    public value: string
    constructor(value: string){
        this.value = value
    }
    /**
     * Receives a string and normalize it as a slug
     * 
     * Example: "An example title" => "an-example-title"
     * @param text 
     */
    static createFromText(text: string){
        const slugText = text
        .normalize(NORMALIZE_FORMAT)
        .toLowerCase()
        .trim()
        .replace(REMOVE_SPACE_GLOBAL, '-')
        .replace(REMOVE_WHAT_IS_NOT_WORD, '')
        .replace(REMOVE_UNDERSCORE, '')
        .replace(REMOVE_DOUBLE_HYPHEN, '')
        .replace(REMOVE_HYPHEN_AT_END, '')

        return new Slug(slugText)
    }
}
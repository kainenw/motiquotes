/* Datamuse Documentation
https://www.datamuse.com/api/ */

let DatamuseQueryParam = {
    meansLike: "ml",

    //Popular nouns modified by the given adjective -- gradual → increase
    popAdj: "rel_jja",
    //Popular adjectives used to modify the given noun	-- beach → sandy
    popNoun: "rel_jjb",

    syn: "rel_syn",
    ant: "rel_ant",

    //"Triggers" (words statistically associated with the query word in the same piece of text.)	cow → milking
    trig: "rel_trg",

    //gondola → boat
    moreSpec: "rel_spc",
    //boat → gondola
    moreGen: "rel_gen",

    //"Comprises" car → accelerator
    isPart: "rel_com",
    //"Part of" trunk → tree
    isWhole: "rel_par",

    //Frequently follows
    freqFol: "rel_bga",
    //Frequently predeceeds
    freqPrec: "rel_bgb"
}
let { 
    meansLike, popAdj, popNoun, syn, ant, trig, moreSpec, moreGen, isPart, isWhole, freqFoll, freqPrec 
} = DatamuseQueryParam;

const get = async (word, type) => {
    const baseURL = "http://api.datamuse.com/words?"
    const topic = "&topic=inspire+motivate+happy+positive+amazing";
    const max = "&max=10";
    const pos = "&md=p";
    const endpoint = baseURL + type + "=" + word + topic + pos + max;
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch(error) {
        console.log(error);
    }
}
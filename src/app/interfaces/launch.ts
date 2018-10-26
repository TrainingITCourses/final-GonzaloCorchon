export interface Launch {
    id:          number;
    name:        string;
    windowstart: string;
    windowend:   string;
    net:         string;
    wsstamp:     number;
    westamp:     number;
    netstamp:    number;
    isostart:    string;
    isoend:      string;
    isonet:      string;
    status:      number;
    inhold:      number;
    tbdtime:     number;
    vidURLs:     string[];
    vidURL:      string;
    infoURLs:    string[];
    infoURL:     string;
    holdreason:  string;
    failreason:  string;
    tbddate:     number;
    probability: number;
    hashtag:     string;
    changed:     string;
    location:    Location;
    rocket:      Rocket;
    missions:    Mission[];
    lsp:         Lsp;
}

export interface Location {
    pads:        Pad[];
    id:          number;
    name:        string;
    infoURL:     string;
    wikiURL:     string;
    countryCode: string;
}

export interface Pad {
    id:        number;
    name:      string;
    infoURL:   string;
    wikiURL:   string;
    mapURL:    string;
    latitude:  number;
    longitude: number;
    agencies:  Lsp[];
}

export interface Lsp {
    id:          number;
    name:        string;
    abbrev:      string;
    countryCode: string;
    type:        number;
    infoURL:     string;
    wikiURL:     string;
    changed:     string;
    infoURLs:    string[];
}

export interface Mission {
    id:          number;
    name:        string;
    description: string;
    type:        number;
    wikiURL:     string;
    typeName:    string;
    agencies:    Lsp[];
    payloads:    any[];
}

export interface Rocket {
    id:            number;
    name:          string;
    configuration: string;
    familyname:    string;
    agencies:      Lsp[];
    wikiURL:       string;
    infoURLs:      any[];
    imageURL:      string;
    imageSizes:    number[];
}
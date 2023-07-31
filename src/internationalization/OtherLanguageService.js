import axios from "axios";

class OtherLanguageService {
    // Language Flag Button
    headerAccessLanguageServices(languageButtonTrigger) {
        axios.defaults.headers["accept-language"] = languageButtonTrigger
    }
}

export default new OtherLanguageService()
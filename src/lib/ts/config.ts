export let apiEndpoint = "https://api.encodeous.ca";

if (import.meta.env.DEV) {
    apiEndpoint = "http://10.1.0.3:5175"
}

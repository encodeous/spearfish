export let apiEndpoint = "https://api.encodeous.ca";

if (import.meta.env.DEV) {
    apiEndpoint = "https://staging-5-terrace.staging.encodeous.ca"
}

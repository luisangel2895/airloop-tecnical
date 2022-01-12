const getUrlProviders =
  "https://staging-interviews-wildcard-p6ln722mzq-uc.a.run.app/providers";
const postUrlProviders =
  "https://staging-interviews-wildcard-p6ln722mzq-uc.a.run.app/orders";

const getProviders = async () => {
  const providers = await fetch(getUrlProviders);
  return providers.json();
};

const postProviders = async (provider) => {
  try {
    const resp = await fetch(`${postUrlProviders}`, {
      method: "POST",
      body: JSON.stringify(provider),
    });
    return await resp.json();
  } catch (error) {
    throw new Error("Failed in petition of providers");
  }
};

export { getProviders, postProviders };

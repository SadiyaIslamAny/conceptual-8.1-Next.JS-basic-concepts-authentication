/// cache ---> SSG ---> static site generation
/// dynamic ---> SSR ---> server side rendering ---> rules --> {cache: 'no-store'}
/// revalidate ---> ISR ---> Incremental Site Regeneration ---> rules --> {next: {revalidate: 10}}


const ModelsPage = async () => {
    const res = await fetch('http://localhost:8000/models')
    const modelsData = await res.json()
    console.log(modelsData)

    return (
        <div>
            <h1>models page</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    modelsData.map(model=> <div className="border p-3 rounded-lg" key={model.id}>
                        <h1 className="text-2xl font-bold">{model.title}</h1>
                        <p>{model.description}</p>
                        <p className="text-xl text-green-500">${model.price}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ModelsPage;
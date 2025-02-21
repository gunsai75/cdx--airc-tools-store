export default function Page({params} : {params: {id: string}}) {
    return (
      <div>
        <h1>Augmented Reality / Virtual Reality {params.id}</h1>
      </div>
    );
  }
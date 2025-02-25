

const stats = [
    {
        id  : 1,
        title : 'Active Users',
        value : '1M+',
    }, 
    {
        id  : 1,
        title : 'Emails Written',
        value : '500K+',
    }, 
    {
        id  : 1,
        title : 'Certificates Issued',
        value : '2M+',
    }, 
    {
        id  : 1,
        title : 'Oculus Quests',
        value : '1.8M+',
    }, 
]

export default function ToolsStats() {  
    return(
        <div className="w-full ">
            <ul className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 my-16">
                {stats.map((stat, index) => (
                    <li className="w-[250px] flex flex-col bg-purple-50 rounded-md p-8 gap-2" key={index}>
                        <h3>{stat.title}</h3>
                        <p className="text-3xl font-bold text-purple-700">{stat.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
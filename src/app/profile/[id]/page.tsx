export default function UserProfile({ params }: any) {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-2 gap-8">
            <h1>UserProfile</h1>
            <hr />
            <p className="text-4xl">UserProfile:
                <span className="p-2 ml-2 rounded bg-emerald-300 text-black ">{params.id}</span>
            </p>
        </div>
    )
}
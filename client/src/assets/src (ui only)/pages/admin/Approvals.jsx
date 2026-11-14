
const PendingApprovals = () => {
    const users = [{ _id: "user-1", name: "Ayesha Khan", email: "ayesha@example.com", role: "student", createdAt: "2026-10-15" }, { _id: "user-2", name: "Ali Ahmed", email: "ali@example.com", role: "teacher", createdAt: "2026-10-18" }, { _id: "user-3", name: "Usman Khan", email: "usman@example.com", role: "admin", createdAt: "2026-10-20" }], loading = false;
    const actingId = null;
    return (<div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Pending Approvals</h2>

            {users?.length === 0 && <h2 className="text-2xl font-semibold mb-4">No Approvals Are pending</h2>}
            {loading && <p className="text-sm text-gray-500">Loading users…</p>}
            
            {!loading && (<ul className="space-y-3">
                    {users.map((user) => (<li key={user._id} className="flex items-center justify-between bg-white rounded-lg shadow p-4">
                            <div>
                                <p className="font-medium">
                                    {user.name}{" "}
                                    <span className="text-gray-500">({user.email})</span>
                                </p>
                                <p className="text-xs text-gray-500">Role: {user.role}</p>
                            </div>

                            <div className="flex gap-2">
                                <button disabled={actingId === user._id} className="px-3 py-1.5 rounded-md bg-green-600 text-white disabled:opacity-50">
                                    {actingId === user._id ? "Approving…" : "Approve"}
                                </button>
                                <button disabled={actingId === user._id} className="px-3 py-1.5 rounded-md bg-red-600 text-white disabled:opacity-50">
                                    {actingId === user._id ? "Rejecting…" : "Reject"}
                                </button>
                            </div>
                        </li>))}
                </ul>)}
        </div>);
};
export default PendingApprovals;

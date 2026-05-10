const PendingApproval = () => {
  return (
    <div className="h-screen border border-red-400">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Seller Account Created!</h1>
        <h1 className="text-xl pt-2">
          Your request sent to admin is pending approval.
        </h1>
      </div>
    </div>
  );
};

export default PendingApproval;

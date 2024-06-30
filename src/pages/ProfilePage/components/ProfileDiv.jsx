export default function BottomRightProfileDiv() {
  return (
    <>
      <div className="border-b-slate-500 border-b text-center py-3">
        <h2 className="text-3xl font-semibold mb-1">Public profile</h2>
        <p>Add information about yourself</p>
      </div>
      <div className="mx-[15%] my-5">
        <div className="flex flex-col gap-2">
          <h5 className="font-medium">Basics:</h5>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className=" p-2 outline-none border border-black"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className=" p-2 outline-none border border-black"
          />
          <div>
            <input
              type="text"
              name="headline"
              id="headline"
              placeholder="Headline"
              className="w-full p-2 outline-none border border-black"
            />
            <p className="text-xs mt-1">
              Add a professional headline like, "Instructor on Udemy" or
              "Architect".
            </p>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h5 className="font-medium">Links:</h5>
          <div className="flex flex-col gap-3 mt-3">
            <input
              type="text"
              name="websiteLink"
              id="websiteLink"
              placeholder="Website Link"
              className=" p-2 outline-none border border-black w-full"
            />
            <div className="flex flex-col">
              <div className="w-full flex">
                <div className="text-nowrap flex items-center px-2 border border-black border-r-0">
                  http://twitter.com/
                </div>
                <input
                  type="text"
                  name="twitterLink"
                  id="twitterLink"
                  placeholder="Twitter Profile"
                  className=" p-2 outline-none border border-black w-full"
                />
              </div>
              <p className="text-xs mt-1">Add your Twitter username.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex">
                <div className="text-nowrap flex items-center px-2 border border-black border-r-0">
                  http://www.facebook.com/
                </div>
                <input
                  type="text"
                  name="facebookLink"
                  id="facebookLink"
                  placeholder="Facebook Profile"
                  className=" p-2 outline-none border border-black w-full"
                />
              </div>
              <p className="text-xs mt-1">Add your Facebook username.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex">
                <div className="text-nowrap flex items-center px-2 border border-black border-r-0">
                  http://www.linkedin.com/
                </div>
                <input
                  type="text"
                  name="linkedinLink"
                  id="linkedinLink"
                  placeholder="LinkedIn Profile"
                  className=" p-2 outline-none border border-black w-full"
                />
              </div>
              <p className="text-xs mt-1">Add your LinkedIn resource id.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex">
                <div className="text-nowrap flex items-center px-2 border border-black border-r-0">
                  http://www.youtube.com/
                </div>
                <input
                  type="text"
                  name="youtubeLink"
                  id="youtubeLink"
                  placeholder="Youtube Profile"
                  className=" p-2 outline-none border border-black w-full"
                />
              </div>
              <p className="text-xs mt-1">Add your Youtube username.</p>
            </div>
          </div>
        </div>
        <button className="px-6 py-2 text-white font-semibold mt-6 bg-slate-900">
          Save
        </button>
      </div>
    </>
  );
}

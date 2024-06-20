import { MoonFilled } from "@ant-design/icons";

const UpgradeBox = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] rounded-2xl text-xs text-white mx-2">
                <div className="flex justify-center">
                    <div className="">
                        <div className="bg-[#6553ff] border-4 border-white -mt-8 p-4 rounded-full">
                            <div className="text-[#695aff] text-xl bg-white rounded-full px-1">
                                <MoonFilled className="rotate-[135deg] " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center px-1 py-7">
                    <h1 className="font-semibold">Upgrade to PRO</h1>
                    <p>to get access to all features! </p>
                    <p>Connect with Venus World! </p>
                </div>
            </div>

        </>
    );
};

export default UpgradeBox;
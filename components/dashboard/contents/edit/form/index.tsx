"use client";

import {
  Button,
  Chip,
  Divider,
  Input,
  NumberInput,
  Select,
  SelectItem,
} from "@heroui/react";
import { Dot } from "lucide-react";
import { StatusDot } from "./status";
import ThumbnailUploader from "./thumbnail-uploader";
import CampaignImageSection from "./campaign-image-uploader";
import TextEditor from "./text-editor";
import ShortUrlSection from "./short-URL";

export default function CampaignEditForm() {
  return (
    <div className="space-y-5">
      <div className="flex justify-start flex-col items-start">
        <span className="text-xs text-gray-400">Campaign status</span>
        <Chip
          variant="light"
          color="warning"
          className="-ml-2"
          startContent={<StatusDot size={18} />}
          size="lg"
        >
          Pending
        </Chip>
      </div>

      <Divider />

      <p className="text-md font-semibold text-gray-700">
        Now, this is where it all comes together 😉. You can review all the
        information you provided, add photos, or even customize your donation
        preset amounts. Good luck on running a successful campaign! 🎯
      </p>

      <div className="space-y-8">
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            Campaign title
          </label>
          <Input variant="bordered" placeholder="Campaign title" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            Phone number
          </label>
          <Input variant="bordered" placeholder="Phone number" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            Name of your campaign’s beneficiary (maximum 50 characters)
          </label>
          <Input variant="bordered" placeholder="Your campaign's beneficiary" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            Your relationship with the beneficiary
          </label>
          <Select variant="bordered" placeholder="Please select an option">
            <SelectItem key="self">I'm the beneficiary</SelectItem>
            <SelectItem key="family">Family member</SelectItem>
            <SelectItem key="friend">Friend</SelectItem>
            <SelectItem key="employer">Employer</SelectItem>
            <SelectItem key="other">Good Samaritan</SelectItem>
          </Select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-600">
            Fundraising target
          </label>
          <NumberInput
            variant="bordered"
            size="lg"
            placeholder="0"
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">VND</span>
              </div>
            }
          />
        </div>

        <ThumbnailUploader />
        <CampaignImageSection />
        <TextEditor
          options={{
            content: [],
            uploadImage: (file: File, success: (url: string) => void) => {
              setTimeout(() => {
                const url = URL.createObjectURL(file);
                success(url);
              }, 1000);
            },
          }}
        />

        <div>
          <label className="block mb-2 text-sm text-gray-500">
            A high quality and sincere video will help you tell your story
            better and raise more money.
          </label>
          <Input variant="bordered" placeholder="Paste the Youtube URL here" />
        </div>

        <ShortUrlSection />

        <Button
          className="inline-block cursor-pointer box-border overflow-hidden relative transition-[0.1s] ease-in select-none border-0 rounded-xl text-center text-white font-['Lexend_Deca'] text-sm font-bold bg-[#eb008c] hover:bg-[#d0007d] p-2.5 m-0 no-underline shadow w-full"
          fullWidth
        >
          SAVE AND SEE MY CAMPAIGN
        </Button>
      </div>
    </div>
  );
}

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  CubeIcon,
  PhotoIcon,
  Cog6ToothIcon,
  ClockIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";

export function DefaultSidebar() {
  return (
    <Card className="w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 h-screen">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          CASA AI
        </Typography>
      </div>
      <div className="flex flex-col">
        <List>
          <Link href="/application/generate">
            <ListItem>
              <ListItemPrefix>
                <PencilSquareIcon className="h-5 w-5" />
              </ListItemPrefix>
              Generate
            </ListItem>
          </Link>
          <Link href="/application/3D">
            <ListItem>
              <ListItemPrefix>
                <CubeIcon className="h-5 w-5" />
              </ListItemPrefix>
              View 3D
            </ListItem>
          </Link>
          <Link href="/application/history">
            <ListItem>
              <ListItemPrefix>
                <ClockIcon className="h-5 w-5" />
              </ListItemPrefix>
              History
            </ListItem>
          </Link>
          <Link href="/application/gallery">
            <ListItem>
              <ListItemPrefix>
                <PhotoIcon className="h-5 w-5" />
              </ListItemPrefix>
              Gallery
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
        <List>
          <Authenticated>
            <UserButton afterSignOutUrl="/" />
          </Authenticated>
        </List>
      </div>
    </Card>
  );
}

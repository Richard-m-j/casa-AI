import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PencilSquareIcon,
    CubeIcon,
    PhotoIcon,
    Cog6ToothIcon,
    ClockIcon,
    PowerIcon,
    
  } from "@heroicons/react/24/solid";

  export function DefaultSidebar() {
    return (
      <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 h-screen">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PencilSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            Generate
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <CubeIcon className="h-5 w-5" />
            </ListItemPrefix>
            View 3D
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ClockIcon className="h-5 w-5" />
            </ListItemPrefix>
            History
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PhotoIcon className="h-5 w-5" />
            </ListItemPrefix>
            Gallery
          </ListItem>
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
      </Card>
    );
  }
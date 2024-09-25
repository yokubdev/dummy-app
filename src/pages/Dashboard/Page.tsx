import { Button, Card, CardBody, CardHeader, Image, Spacer } from '@nextui-org/react';

export function Page() {
  return (
    <Card className="py-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible ">
        <Button defaultChecked={true} className="">
          Play
        </Button>
        <Spacer y={4} />
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

import { useEffect } from 'react';
import Pusher from 'pusher-js';

const WorkOrderNotification = ({ userId }) => {
    useEffect(() => {
        const pusherKey = import.meta.env.VITE_PUSHER_APP_KEY;
        const pusherCluster = import.meta.env.VITE_PUSHER_APP_CLUSTER;

        const pusher = new Pusher(pusherKey, {
            cluster: pusherCluster,
            encrypted: true,
        });

        const channel = pusher.subscribe(`work-order.${userId}`);

        channel.bind('work-order.created', (data) => {
            // Show a notification to the user
            console.log('Work order created:', data.workOrder);
        });

        return () => {
            channel.unbind();
            pusher.unsubscribe(`work-order.${userId}`);
        };
    }, [userId]);

    return null;
};

export default WorkOrderNotification;

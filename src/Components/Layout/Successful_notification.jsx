import React, { useEffect, useState } from 'react';
import './Successful_notification.css'; // Tạo file CSS cho thông báo

const Successful_notification = ({ message, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000); // 2 giây
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        show && (
            <div className="notification">
                <div className="notification-content">
                    {message}
                </div>
            </div>
        )
    );
};

export default Successful_notification;

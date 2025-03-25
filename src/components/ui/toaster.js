import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, } from "@/components/ui/toast";
export function Toaster() {
    const { toasts } = useToast();
    return (_jsxs(ToastProvider, { children: [toasts.map(function ({ id, title, description, action, ...props }) {
                return (_jsxs(Toast, { ...props, children: [_jsxs("div", { className: "grid gap-1", children: [title && _jsx(ToastTitle, { children: title }), description && (_jsx(ToastDescription, { children: description }))] }), action, _jsx(ToastClose, {})] }, id));
            }), _jsx(ToastViewport, { className: "fixed top-0 right-0 z-50 p-4" })] }));
}

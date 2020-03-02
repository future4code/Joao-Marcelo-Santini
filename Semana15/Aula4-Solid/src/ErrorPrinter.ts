import { AppError } from './AppError';

export class ErrorPrinter extends AppError {
    public printError(message: string, errorDate: Date): string {
        return `${message} - ${errorDate}`
    }
} 
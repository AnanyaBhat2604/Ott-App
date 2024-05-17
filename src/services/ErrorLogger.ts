export class ErrorLogger {
  logError(moduleName: string, errorMessage: string, timestamp: string): void {
    console.error(
      `[${timestamp}] Error in module ${moduleName}: ${errorMessage}`
    );
  }
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} TechSpace. All rights reserved.</p>
      </div>
    </footer>
  );
}

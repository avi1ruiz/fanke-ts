import { FaGithub } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className="mt-auto text-white-50 text-center">
            <p>
                <a href="https://github.com/victor1ruiz" className="text-decoration-none">
                    <FaGithub /> GitHub
                </a>
            </p>
        </footer>
    )
}
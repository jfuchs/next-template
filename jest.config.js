module.exports = {
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
}

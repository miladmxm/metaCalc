export default {
    testEnvironment:'node',
    preset: "@shelf/jest-mongodb",
    watchPathIgnorePatterns: ['globalConfig'],
    verbose:true,
    forceExit:true,
    clearMocks:true,
}
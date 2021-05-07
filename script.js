// @ts-check

/**
 * octoherd-script-good-pr
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 */
export async function script(octokit, repository) {
  const [repoOwner, repoName] = repository.full_name.split("/");
  octokit.log.info(`${repoOwner} label exists: ${exists}`)

  const data = await octokit.request(
    `GET /repos/${repoOwner}/${repoName}/issues/`
  )

  octokit.log.info(data)
}
